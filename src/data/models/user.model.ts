import { Table, Column, Model } from 'sequelize-typescript'
import {INTEGER, STRING, DATE} from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'ejercicio-schema',
    tableName: 'users'
})
export class UserPojo extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER,
        references: 'user_id'

    })
    userId: number

    @Column({
        type: STRING,
        references: 'username'
        
    })
    username: string

    @Column({
        type: STRING,
        references: 'password'
    })
    password: string

    @Column({
        type: STRING,
        references: 'email'

    })
    email: string

    @Column({
        type: STRING,
        references: 'status',
        values: ['Active', 'Inactive', 'DieInAFire']
    })
    active: string

    @Column({
        type: DATE,
        references: 'createAt',
        
    })
    createAt: Date

    @Column({
        type: DATE,
        references: 'updateAt',
        
    })
    updatedAt: Date



    /* 
    user_id
    username
    password
    email
    status
    createAt
    updateAt
     */
}