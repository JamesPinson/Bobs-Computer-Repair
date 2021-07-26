/**
 * Title: service.interface.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the service interface for IService.
 */

//Here we export the IService interface which consist of a name, price, and checked fields.
export interface IService {
  name: string;
  price: number;
  checked: boolean;
}
