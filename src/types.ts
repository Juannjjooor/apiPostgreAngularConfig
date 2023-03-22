export class UserDto {
    userId: string
    username: string
    password: string
    email: string
    active?: boolean
}

export type NewUserDto = Omit<UserDto, 'userId'>