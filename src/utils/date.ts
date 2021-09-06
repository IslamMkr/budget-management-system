const date = new Date()

export const getCurrentTime = () => {
    var now = new Date()
    var date = now.getDate() + '/' + (now.getMonth() + 1) + '/' +now.getFullYear()
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    return date + '-' + time
}

export const currentYear = date.getFullYear()
export const currentMonth = date.getMonth() + 1

export const getMonthInLetters = (monthNumber) => {
    switch (monthNumber) {
        case 1:
            return 'january' 
        case 2:
            return 'february' 
        case 3:
            return 'march' 
        case 4:
            return 'april' 
        case 5:
            return 'may' 
        case 6:
            return 'june' 
        case 7:
            return 'july' 
        case 8:
            return 'august' 
        case 9:
            return 'september' 
        case 10:
            return 'october' 
        case 11:
            return 'november'
        default:
            return 'december'
    }
}

export const getMonthInNumber = (monthLetter) => {
    switch (monthLetter) {
        case 'january':
            return 1
        case 'february':
            return 2
        case 'march':
            return 3
        case 'april':
            return 4
        case 'may':
            return 5
        case 'june':
            return 6
        case 'july':
            return 7
        case 'august':
            return 8
        case 'september':
            return 9
        case 'october':
            return 10
        case 'november':
            return 11
        default:
            return 12
    }
}