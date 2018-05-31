import moment from 'moment'

export default [
  {
    id: '1',
    description: 'Coffee',
    note: 'Hazelnut',
    amount: 1800,
    createdAt: moment(0).valueOf()
  },
  {
    id: '2',
    description: 'Tea',
    note: 'Earl Grey',
    amount: 5200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Water',
    note: 'Mineral',
    amount: 4500,
    createdAt: moment(0).add(3, 'days').valueOf()
  }

]
