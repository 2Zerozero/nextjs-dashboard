// 이 파일은 데이터의 타입 정의를 담고 있어요.
// 데이터가 어떤 모양(구조)을 가지고 있는지, 그리고 각 속성이 어떤 데이터 타입을 허용하는지 설명해요.
// 학습을 쉽게 하기 위해 직접 타입을 작성하고 있어요.
// 하지만 실제로는 Prisma 같은 ORM을 쓰면, 이런 타입들이 자동으로 생성돼요. (따라서 보통은 직접 다 작성할 필요가 없어요.)

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // TypeScript에서 이것을 "문자열 유니온 타입(string union type)"이라고 합니다.
  // 즉, "status" 속성은 'pending' 또는 'paid' 두 문자열 중 하나만 가질 수 있다는 뜻입니다.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// 데이터베이스(DB)에서는 amount 값을 숫자(number) 형태로 반환해요.
// 하지만 프론트엔드(화면)에서는 금액을 "1,000"처럼 천 단위 구분자가 포함된 문자열(string)로 보여주는 것이 일반적이에요.
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
