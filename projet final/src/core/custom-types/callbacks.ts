/**
 * Type de callback pour afficher un message de type string
 */
// Alias de type
export type AfficherString = (message: string) => void;

// Alias de type
export type AfficherStringOrNonReference = AfficherString | null | undefined;