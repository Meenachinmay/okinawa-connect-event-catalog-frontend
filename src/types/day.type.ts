import dayjs from 'dayjs'
import { IEvent } from './event.type'

export interface IDay {
  day: dayjs.Dayjs
  events: IEvent[]
}
