import type { Customer } from "#/resources/customers/schema";
import { faker } from "@faker-js/faker";
import { createMany } from "@naplaca/react-core";

const customers = new Map<string, Customer>();

customers.set("9ad2e564-f8fa-4bb4-8844-14d4124b3bed", {
  id: "9ad2e564-f8fa-4bb4-8844-14d4124b3bed",
  name: "John Matias Doe",
  displayName: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: "+244920000000",
  avatar: "https://i.pravatar.cc/300?u=john.doe@example.com",
  createdAt: faker.date.past().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
});

createMany(100, () => {
  const email = faker.internet.email().toLowerCase();
  const name = faker.person.fullName();

  return {
    id: self.crypto.randomUUID(),
    name,
    email,
    displayName: `${name.split(" ").at(0)} ${name.split(" ").at(-1)}`,
    phoneNumber: faker.helpers.fromRegExp("+24492[0-9]{7}"),
    avatar: `https://i.pravatar.cc/300?u=${email}`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}).forEach((customer) => customers.set(customer.id, customer));

export default customers;
