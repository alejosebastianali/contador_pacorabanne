const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24

const getCompleteTime = (val) => {
	if (val !== undefined && val >= 0) {
		return val <= 9 ? '0' + val : val
	}
	return '00'
}

function splitTime(time, element){
	element.innerHTML = ''

	let timeStr = String(time)
	if(timeStr.length === 2){
		const span1 = document.createElement('span')
		const span2 = document.createElement('span')
		span1.classList.add('left')
		span2.classList.add('right')
		span1.innerText = timeStr[0]
		span2.innerText = timeStr[1]
		element.appendChild(span1)
		element.appendChild(span2)
	}
}

let countDown = new Date('Sep 1, 2021 18:00:00').getTime(),
	x = setInterval(function () {
		let now = new Date().getTime(),
			distance = countDown - now

		let fullDay = Math.floor(distance / day)
		let fullHour = Math.floor((distance % day) / hour)
		let fullMinutes = Math.floor((distance % hour) / minute)
		let fullSeconds = Math.floor((distance % minute) / second)

		splitTime(getCompleteTime(fullDay), document.getElementById('days'))
		splitTime(getCompleteTime(fullHour), document.getElementById('hours'))
		splitTime(getCompleteTime(fullMinutes), document.getElementById('minutes'))
		splitTime(getCompleteTime(fullSeconds), document.getElementById('seconds'))


		//do something later when date is reached
		//if (distance < 0) {
		//  clearInterval(x);
		//  'IT'S MY BIRTHDAY!;
		//}
	}, second)
