export const parseDate = (string: string) => {

    if(!string){
        return `Date parsing error, string: ${string}`
    }

    const year = string.slice(0,4)
    const month = string.slice(5,7)
    const day = string.slice(8,10)
    
    return `${day}-${month}-${year}`
}