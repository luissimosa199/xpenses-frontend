export const statusTranslation = (status: 'paid' | 'notpaid' | 'unknown') => {
    switch (status) {
        case 'paid':
            return 'Pago'
        case 'notpaid':
            return 'Por pagar'
        case 'unknown':
            return 'Desconocido'
        default:
            break;
    }
}