
const dayNames = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ]
const monthNames = [ 
    'January', 'February', 'March',
    'April',   'May',      'June',
    'July',    'August',   'September',
    'October', 'November', 'December',
]

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

export const getMessageTime = (isoDate) => 
{
    const date = new Date(isoDate);
    return date.getHours() + ':' + date.getMinutes()
}

export const getChatDate = (isoDate) =>
{
    const date = new Date(isoDate);
    const now = new Date();

    if (date.getFullYear() !== now.getFullYear())
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()

    return monthNames[date.getMonth()] + ' ' + date.getDate()
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