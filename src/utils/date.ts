const date = new Date()

export const getCurrentTime = () => {
    var now = new Date()
    var date = now.getDate() + '/' + (now.getMonth() + 1) + '/' +now.getFullYear()
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    return date + '-' + time
}

export const currentYear = date.getFullYear()