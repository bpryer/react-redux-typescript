
export interface IUser {
  id: number,
  first: string,
  last: string,
  age: number,
  description: string
}

export function UserReducer(): IUser[] {
  return [
    {
      age: 33,
      description: 'One awesome dude!',
      first: 'Brent',
      id: 1,
      last: 'Pryer',
    },
    {
      age: 33,
      description: 'Wife of One Awesome Dude!',
      first: 'Michelle',
      id: 2,
      last: 'Pryer',
    },
  ]
}
