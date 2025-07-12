import moment from "moment";


export function formatDate(dateString: any, inputFormat: any, outputFormat: any) {
    // Crée un objet moment à partir de la chaîne et du format d'entrée
    const date = moment(dateString, inputFormat);
    
    // Vérifie si la date est valide
    if (!date.isValid()) {
        throw new Error("Date invalide ou format d'entrée incorrect.");
    }
    
    // Retourne la date formatée
    return date.format(outputFormat);
}

export function formatDate2(date: Date | string | undefined, format: string): string {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) return ''; // Invalid date

  const pad = (num: number) => num.toString().padStart(2, '0');
  
  const replacements: Record<string, string> = {
    'YYYY': d.getFullYear().toString(),
    'MM': pad(d.getMonth() + 1),
    'DD': pad(d.getDate()),
    'HH': pad(d.getHours()),
    'mm': pad(d.getMinutes()),
    'ss': pad(d.getSeconds()),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => replacements[match]);
}