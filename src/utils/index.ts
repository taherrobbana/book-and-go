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