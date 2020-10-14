import { CustomerReservation } from './customerReservation.component';

xdescribe('Customer Reservation', () => {
  let custReservation;

  beforeEach(() => {
    custReservation = new CustomerReservation();
  });

  afterEach(() => {
    custReservation = null;
  });

  beforeAll(() => {});

  afterAll(() => {});

  it('should increase the customer count by 1', () => {
    let custCount = custReservation.registerCustomer();

    expect(custCount).toEqual(11);
  });

  it('should increase the customer count by 1', () => {
    let custCount = custReservation.unRegisterCustomer();

    expect(custCount).toEqual(9);
  });
});
