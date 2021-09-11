export const formatNumberToCurrency = (number) => {
    const formatter = new Intl.NumberFormat('en-US');

    return formatter.format(number).replace(' ', ',') + '.00'
}