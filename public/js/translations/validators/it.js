(function (t) {
// it
t.add("This value should be false.", "Questo valore dovrebbe essere falso.", "validators", "it");
t.add("This value should be true.", "Questo valore dovrebbe essere vero.", "validators", "it");
t.add("This value should be of type {{ type }}.", "Questo valore dovrebbe essere di tipo {{ type }}.", "validators", "it");
t.add("This value should be blank.", "Questo valore dovrebbe essere vuoto.", "validators", "it");
t.add("The value you selected is not a valid choice.", "Questo valore dovrebbe essere una delle opzioni disponibili.", "validators", "it");
t.add("You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.", "Si dovrebbe selezionare almeno {{ limit }} opzione.|Si dovrebbero selezionare almeno {{ limit }} opzioni.", "validators", "it");
t.add("You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.", "Si dovrebbe selezionare al massimo {{ limit }} opzione.|Si dovrebbero selezionare al massimo {{ limit }} opzioni.", "validators", "it");
t.add("One or more of the given values is invalid.", "Uno o pi\u00f9 valori inseriti non sono validi.", "validators", "it");
t.add("This field was not expected.", "Questo campo non \u00e8 stato previsto.", "validators", "it");
t.add("This field is missing.", "Questo campo \u00e8 mancante.", "validators", "it");
t.add("This value is not a valid date.", "Questo valore non \u00e8 una data valida.", "validators", "it");
t.add("This value is not a valid datetime.", "Questo valore non \u00e8 una data e ora valida.", "validators", "it");
t.add("This value is not a valid email address.", "Questo valore non \u00e8 un indirizzo email valido.", "validators", "it");
t.add("The file could not be found.", "Non \u00e8 stato possibile trovare il file.", "validators", "it");
t.add("The file is not readable.", "Il file non \u00e8 leggibile.", "validators", "it");
t.add("The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.", "Il file \u00e8 troppo grande ({{ size }} {{ suffix }}). La dimensione massima consentita \u00e8 {{ limit }} {{ suffix }}.", "validators", "it");
t.add("The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.", "Il mime type del file non \u00e8 valido ({{ type }}). I tipi permessi sono {{ types }}.", "validators", "it");
t.add("This value should be {{ limit }} or less.", "Questo valore dovrebbe essere {{ limit }} o inferiore.", "validators", "it");
t.add("This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.", "Questo valore \u00e8 troppo lungo. Dovrebbe essere al massimo di {{ limit }} carattere.|Questo valore \u00e8 troppo lungo. Dovrebbe essere al massimo di {{ limit }} caratteri.", "validators", "it");
t.add("This value should be {{ limit }} or more.", "Questo valore dovrebbe essere {{ limit }} o superiore.", "validators", "it");
t.add("This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.", "Questo valore \u00e8 troppo corto. Dovrebbe essere almeno di {{ limit }} carattere.|Questo valore \u00e8 troppo corto. Dovrebbe essere almeno di {{ limit }} caratteri.", "validators", "it");
t.add("This value should not be blank.", "Questo valore non dovrebbe essere vuoto.", "validators", "it");
t.add("This value should not be null.", "Questo valore non dovrebbe essere nullo.", "validators", "it");
t.add("This value should be null.", "Questo valore dovrebbe essere nullo.", "validators", "it");
t.add("This value is not valid.", "Questo valore non \u00e8 valido.", "validators", "it");
t.add("This value is not a valid time.", "Questo valore non \u00e8 un'ora valida.", "validators", "it");
t.add("This value is not a valid URL.", "Questo valore non \u00e8 un URL valido.", "validators", "it");
t.add("The two values should be equal.", "I due valori dovrebbero essere uguali.", "validators", "it");
t.add("The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.", "Il file \u00e8 troppo grande. La dimensione massima \u00e8 {{ limit }} {{ suffix }}.", "validators", "it");
t.add("The file is too large.", "Il file \u00e8 troppo grande.", "validators", "it");
t.add("The file could not be uploaded.", "Il file non pu\u00f2 essere caricato.", "validators", "it");
t.add("This value should be a valid number.", "Questo valore dovrebbe essere un numero.", "validators", "it");
t.add("This file is not a valid image.", "Questo file non \u00e8 una immagine valida.", "validators", "it");
t.add("This is not a valid IP address.", "Questo valore non \u00e8 un indirizzo IP valido.", "validators", "it");
t.add("This value is not a valid language.", "Questo valore non \u00e8 una lingua valida.", "validators", "it");
t.add("This value is not a valid locale.", "Questo valore non \u00e8 una impostazione regionale valida.", "validators", "it");
t.add("This value is not a valid country.", "Questo valore non \u00e8 una nazione valida.", "validators", "it");
t.add("This value is already used.", "Questo valore \u00e8 gi\u00e0 stato utilizzato.", "validators", "it");
t.add("The size of the image could not be detected.", "La dimensione dell'immagine non pu\u00f2 essere determinata.", "validators", "it");
t.add("The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.", "La larghezza dell'immagine \u00e8 troppo grande ({{ width }}px). La larghezza massima \u00e8 di {{ max_width }}px.", "validators", "it");
t.add("The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.", "La larghezza dell'immagine \u00e8 troppo piccola ({{ width }}px). La larghezza minima \u00e8 di {{ min_width }}px.", "validators", "it");
t.add("The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.", "L'altezza dell'immagine \u00e8 troppo grande ({{ height }}px). L'altezza massima \u00e8 di {{ max_height }}px.", "validators", "it");
t.add("The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.", "L'altezza dell'immagine \u00e8 troppo piccola ({{ height }}px). L'altezza minima \u00e8 di {{ min_height }}px.", "validators", "it");
t.add("This value should be the user's current password.", "Questo valore dovrebbe essere la password attuale dell'utente.", "validators", "it");
t.add("This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.", "Questo valore dovrebbe contenere esattamente {{ limit }} carattere.|Questo valore dovrebbe contenere esattamente {{ limit }} caratteri.", "validators", "it");
t.add("The file was only partially uploaded.", "Il file \u00e8 stato caricato solo parzialmente.", "validators", "it");
t.add("No file was uploaded.", "Nessun file \u00e8 stato caricato.", "validators", "it");
t.add("No temporary folder was configured in php.ini.", "Nessuna cartella temporanea \u00e8 stata configurata nel php.ini.", "validators", "it");
t.add("Cannot write temporary file to disk.", "Impossibile scrivere il file temporaneo sul disco.", "validators", "it");
t.add("A PHP extension caused the upload to fail.", "Un'estensione PHP ha causato il fallimento del caricamento.", "validators", "it");
t.add("This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.", "Questa collezione dovrebbe contenere almeno {{ limit }} elemento.|Questa collezione dovrebbe contenere almeno {{ limit }} elementi.", "validators", "it");
t.add("This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.", "Questa collezione dovrebbe contenere massimo {{ limit }} elemento.|Questa collezione dovrebbe contenere massimo {{ limit }} elementi.", "validators", "it");
t.add("This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.", "Questa collezione dovrebbe contenere esattamente {{ limit }} elemento.|Questa collezione dovrebbe contenere esattamente {{ limit }} elementi.", "validators", "it");
t.add("Invalid card number.", "Numero di carta non valido.", "validators", "it");
t.add("Unsupported card type or invalid card number.", "Tipo di carta non supportato o numero non valido.", "validators", "it");
t.add("This is not a valid International Bank Account Number (IBAN).", "Questo valore non \u00e8 un IBAN (International Bank Account Number) valido.", "validators", "it");
t.add("This value is not a valid ISBN-10.", "Questo valore non \u00e8 un codice ISBN-10 valido.", "validators", "it");
t.add("This value is not a valid ISBN-13.", "Questo valore non \u00e8 un codice ISBN-13 valido.", "validators", "it");
t.add("This value is neither a valid ISBN-10 nor a valid ISBN-13.", "Questo valore non \u00e8 un codice ISBN-10 o ISBN-13 valido.", "validators", "it");
t.add("This value is not a valid ISSN.", "Questo valore non \u00e8 un codice ISSN valido.", "validators", "it");
t.add("This value is not a valid currency.", "Questo valore non \u00e8 una valuta valida.", "validators", "it");
t.add("This value should be equal to {{ compared_value }}.", "Questo valore dovrebbe essere uguale a {{ compared_value }}.", "validators", "it");
t.add("This value should be greater than {{ compared_value }}.", "Questo valore dovrebbe essere maggiore di {{ compared_value }}.", "validators", "it");
t.add("This value should be greater than or equal to {{ compared_value }}.", "Questo valore dovrebbe essere maggiore o uguale a {{ compared_value }}.", "validators", "it");
t.add("This value should be identical to {{ compared_value_type }} {{ compared_value }}.", "Questo valore dovrebbe essere identico a {{ compared_value_type }} {{ compared_value }}.", "validators", "it");
t.add("This value should be less than {{ compared_value }}.", "Questo valore dovrebbe essere minore di {{ compared_value }}.", "validators", "it");
t.add("This value should be less than or equal to {{ compared_value }}.", "Questo valore dovrebbe essere minore o uguale a {{ compared_value }}.", "validators", "it");
t.add("This value should not be equal to {{ compared_value }}.", "Questo valore dovrebbe essere diverso da {{ compared_value }}.", "validators", "it");
t.add("This value should not be identical to {{ compared_value_type }} {{ compared_value }}.", "Questo valore dovrebbe essere diverso da {{ compared_value_type }} {{ compared_value }}.", "validators", "it");
t.add("The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.", "Il rapporto di aspetto dell'immagine \u00e8 troppo grande ({{ ratio }}). Il rapporto massimo consentito \u00e8 {{ max_ratio }}.", "validators", "it");
t.add("The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.", "Il rapporto di aspetto dell'immagine \u00e8 troppo piccolo ({{ ratio }}). Il rapporto minimo consentito \u00e8 {{ min_ratio }}.", "validators", "it");
t.add("The image is square ({{ width }}x{{ height }}px). Square images are not allowed.", "L'immagine \u00e8 quadrata ({{ width }}x{{ height }}px). Le immagini quadrate non sono consentite.", "validators", "it");
t.add("The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.", "L'immagine \u00e8 orizzontale ({{ width }}x{{ height }}px). Le immagini orizzontali non sono consentite.", "validators", "it");
t.add("The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.", "L'immagine \u00e8 verticale ({{ width }}x{{ height }}px). Le immagini verticali non sono consentite.", "validators", "it");
t.add("An empty file is not allowed.", "Un file vuoto non \u00e8 consentito.", "validators", "it");
t.add("The host could not be resolved.", "L'host non pu\u00f2 essere risolto.", "validators", "it");
t.add("This value does not match the expected {{ charset }} charset.", "Questo valore non corrisponde al charset {{ charset }}.", "validators", "it");
t.add("This is not a valid Business Identifier Code (BIC).", "Questo valore non \u00e8 un codice BIC valido.", "validators", "it");
t.add("Error", "Errore", "validators", "it");
t.add("This is not a valid UUID.", "Questo non \u00e8 un UUID valido.", "validators", "it");
t.add("This value should be a multiple of {{ compared_value }}.", "Questo valore dovrebbe essere un multiplo di {{ compared_value }}.", "validators", "it");
t.add("This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.", "Questo codice identificativo bancario (BIC) non \u00e8 associato all'IBAN {{ iban }}.", "validators", "it");
t.add("This value should be valid JSON.", "Questo valore dovrebbe essere un JSON valido.", "validators", "it");
t.add("This collection should contain only unique elements.", "Questa collezione dovrebbe contenere solo elementi unici.", "validators", "it");
t.add("This value should be positive.", "Questo valore dovrebbe essere positivo.", "validators", "it");
t.add("This value should be either positive or zero.", "Questo valore dovrebbe essere positivo oppure zero.", "validators", "it");
t.add("This value should be negative.", "Questo valore dovrebbe essere negativo.", "validators", "it");
t.add("This value should be either negative or zero.", "Questo valore dovrebbe essere negativo oppure zero.", "validators", "it");
t.add("This value is not a valid timezone.", "Questo valore non \u00e8 un fuso orario valido.", "validators", "it");
t.add("This password has been leaked in a data breach, it must not be used. Please use another password.", "Questa password \u00e8 trapelata durante una compromissione di dati, non deve essere usata. Si prega di usare una password diversa.", "validators", "it");
t.add("This value should be between {{ min }} and {{ max }}.", "Questo valore dovrebbe essere compreso tra {{ min }} e {{ max }}.", "validators", "it");
t.add("This value is not a valid hostname.", "Questo valore non \u00e8 un nome di host valido.", "validators", "it");
t.add("The number of elements in this collection should be a multiple of {{ compared_value }}.", "Il numero di elementi in questa collezione dovrebbe essere un multiplo di {{ compared_value }}.", "validators", "it");
t.add("This value should satisfy at least one of the following constraints:", "Questo valore dovrebbe soddisfare almeno uno dei vincoli seguenti:", "validators", "it");
t.add("Each element of this collection should satisfy its own set of constraints.", "Ciascun elemento di questa collezione dovrebbe soddisfare il suo insieme di vincoli.", "validators", "it");
t.add("This form should not contain extra fields.", "Questo form non dovrebbe contenere nessun campo extra.", "validators", "it");
t.add("The uploaded file was too large. Please try to upload a smaller file.", "Il file caricato \u00e8 troppo grande. Per favore caricare un file pi\u00f9 piccolo.", "validators", "it");
t.add("The CSRF token is invalid. Please try to resubmit the form.", "Il token CSRF non \u00e8 valido. Provare a reinviare il form.", "validators", "it");
})(Translator);