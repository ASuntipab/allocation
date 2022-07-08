import { CreatedEntity } from "../../common/data/models";
import { Entity, Column } from "typeorm";


@Entity()
export class VolumeVersion extends CreatedEntity<number> {
    @Column({ nullable: true, length: 200 })
    action: string;

    @Column({ nullable: true, length: 200 })
    remark: string;

    @Column({ nullable: true, length: 200 })
    filePath: string;

    @Column({ nullable: true })
    year: Number

    @Column({ nullable: true })
    version: Number

}