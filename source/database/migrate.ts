import "reflect-metadata";
import {createConnection} from "typeorm";
import {Catalog} from "./entity/Catalog";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mysql",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: false
}).then(async connection => {

    let catalog = new Catalog();
    catalog.journal = "Oracle Magazine";
    catalog.publisher = "Oracle Publishing";
    catalog.edition = "March-April 2005";
    catalog.title = "Starting with Oracle ADF";
    catalog.author = "Steve Muench";
    catalog.isPublished = true;

    await connection.manager.save(catalog);
    console.log('Catalog has been saved'+'\n');

    let catalog2 = new Catalog();
    catalog2.journal = "Oracle Magazine";
    catalog2.publisher = "Oracle Publishing";
    catalog2.edition = "November December 2013";
    catalog2.title = "Engineering as a Service";
    catalog2.author = "David A. Kelly";
    catalog2.isPublished = true;

    await connection.manager.save(catalog2);
    console.log('Catalog has been saved'+'\n');

}).catch(error => console.log(error));