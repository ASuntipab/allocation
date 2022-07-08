import { CreatedEntity } from "../../../common/data/models";
import { Entity, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity()
export class MasterSupplier extends CreatedEntity<number> {

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @Column({ nullable: true, length: 200 })
    code: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @Column({ nullable: true, length: 200 })
    fullName: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @Column({ nullable: true, length: 200 })
    shortName: string;
    
}