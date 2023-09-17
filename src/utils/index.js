import moment from 'moment'

export const getDate = (isoDate) => 
{
    const date = moment(isoDate, true)
    const diffDays = date.diff(moment(), 'days')

    if (date.isSame(moment(), 'day'))
    {
        return date.format("HH:mm")
    }

    if (diffDays < 7)
    {
        return date.format("dd")
    }

    return date.format("DD.MM.YYYY")
}

export const getMessageTime = (isoDate) => 
{
    return moment(isoDate, true).format("HH:mm")
}

export const getChatDate = (isoDate) =>
{
    const date = moment(isoDate, true)

    if (date.isSame(moment(), 'years'))
    {
        return date.format("MMMM D")
    }
    return date.format("MMMM D, YYYY")
}

export const stringToColor = (string) => 
{
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) 
        hash = string.charCodeAt(i) + ((hash << 5) - hash);

    let color = '#';

    for (i = 0; i < 3; i += 1) 
    {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

export const stringAvatar = (name, size) => 
{
    const words = name.split(' ')
    size = size + 'px'

    let text;
    if (words[1] !== '')
        text = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    else
        text = `${name.split(' ')[0][0]}`

    return {
        sx: { bgcolor: stringToColor(name), color: 'text.primary', fontWeight: 'bold',
            width: size, height: size},
        children: text,
    };
}