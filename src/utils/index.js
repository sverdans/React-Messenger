
const dayNames = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ]

export const getDate = (isoDate) => 
{
    const date = new Date(isoDate);

    const diffDays = parseInt((new Date() - date) / (1000 * 60 * 60 * 24), 10); 

    if (diffDays < 1)
        return date.getHours() + ':' + date.getMinutes()

    if (diffDays < 7)
        return dayNames[date.getDay()]

    return date.toISOString().split('T')[0].replace('-', '.')
}

export const getTime = (isoDate) => 
{
    const date = new Date(isoDate);
    return date.getHours() + ':' + date.getMinutes()
}
