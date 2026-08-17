const SHEET_NAME = "Sesiones";

function doGet(e) {
  const action = e && e.parameter ? e.parameter.action : "sesiones";

  if (action !== "sesiones") {
    return jsonResponse({ error: "Acción no válida" });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) return jsonResponse({ error: `No existe la hoja ${SHEET_NAME}` });

  const values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return jsonResponse({ sesiones: [] });

  const headers = values[0].map(normalizeHeader);
  const sesiones = values
    .slice(1)
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row, index) => {
      const item = {};
      headers.forEach((header, column) => {
        item[header] = row[column] || "";
      });

      const inicioISO = buildBogotaDate(item.fecha, item.inicio);
      const finISO = buildBogotaDate(item.fecha, item.fin);
      const estadoAutomatico = calculateStatus(inicioISO, finISO);

      return {
        id: item.id || String(index + 1),
        fecha: item.fecha || "",
        inicio: item.inicio || "",
        fin: item.fin || "",
        tema: item.tema || "Sesión del laboratorio",
        descripcion: item.descripcion || "",
        meetUrl: item.meeturl || "",
        calendarUrl: item.calendarurl || "",
        materialUrl: item.materialurl || "",
        estado: estadoAutomatico || item.estado || "Programada",
        inicioISO: inicioISO ? inicioISO.toISOString() : "",
      };
    })
    .sort((a, b) => {
      if (!a.inicioISO) return 1;
      if (!b.inicioISO) return -1;
      return new Date(a.inicioISO) - new Date(b.inicioISO);
    });

  const nextSessionIndex = sesiones.findIndex(
    (sesion) => sesion.estado === "Programada"
  );

  if (nextSessionIndex >= 0) {
    sesiones[nextSessionIndex].estado = "Próxima";
  }

  return jsonResponse({ sesiones });
}

function buildBogotaDate(fecha, hora) {
  const dateMatch = String(fecha).trim().match(/^(\d{1,4})[\/-](\d{1,2})[\/-](\d{1,4})$/);
  const cleanTime = String(hora)
    .trim()
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "");
  const timeMatch = cleanTime.match(/^(\d{1,2}):(\d{2})(am|pm)?$/);

  if (!dateMatch || !timeMatch) return null;

  let year;
  let month;
  let day;

  if (dateMatch[1].length === 4) {
    year = Number(dateMatch[1]);
    month = Number(dateMatch[2]);
    day = Number(dateMatch[3]);
  } else {
    day = Number(dateMatch[1]);
    month = Number(dateMatch[2]);
    year = Number(dateMatch[3]);
  }

  let hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2]);
  const period = timeMatch[3];

  if (period === "pm" && hour < 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;

  const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00-05:00`;
  const result = new Date(iso);
  return isNaN(result.getTime()) ? null : result;
}

function calculateStatus(start, end) {
  if (!start || !end) return "";

  const now = new Date();
  if (now < start) return "Programada";
  if (now <= end) return "En curso";
  return "Finalizada";
}

function normalizeHeader(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}


function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
