function getDayInfo(date) {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const months = ['Января', 'Февраля', 'Марта','Апреля','Мая','Июня','Июля','Августа','Сентябра','Октября','Ноября','Декабря']

  let tmp = date.split('.')
  date = new Date(tmp[2],tmp[1] - 1,tmp[0]); 

	const week = Math.ceil((date.getDate() + date.getDay()) / 7);
	

	
  return days[date.getDay()] + ', '+ week + ' неделя ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года'
}


console.log(getDayInfo('15.12.2021'))
console.log(getDayInfo('29.10.2021'))







