/* eslint-disable prettier/prettier */
export const getTime = (data, duration) => {
  const date = new Date(data)
  const durationTime = {
    hours: Math.floor(duration / 60),
    minutes: duration % 60,
  }
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return {
    startFinish: `${hours}:${minutes} - ${makeArriveTime(hours, minutes, durationTime)}`,
    inPath: `${durationTime.hours}ч ${durationTime.minutes}м`,
  }
}

const makeArriveTime = (startHours, startMinutes, durationTime) => {
  const allMinutes = startHours * 60 + startMinutes + durationTime.hours * 60 + durationTime.minutes
  const hours = Math.floor(allMinutes / 60) % 24 
  const minutes = allMinutes % 60
  let result = hours.toString().length < 2 ? '0' + hours : hours
  result += minutes.toString().length < 2 ? ':0' + minutes : ':' + minutes

  return result
}
