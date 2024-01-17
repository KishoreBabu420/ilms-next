import { Users, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Users[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      username: 'Ingra Ledram',
      phoneNumber: '703-138-1955',
      emailId: 'iledram0@wsj.com',
      role: 'admin',
      activeStatus: false,
    },
    {
      id: '2',
      username: 'Mordecai Bulfit',
      phoneNumber: '432-601-4783',
      emailId: 'mbulfit1@oracle.com',
      role: 'user',
      activeStatus: true,
    },
    {
      id: '3',
      username: 'Rossy Stillwell',
      phoneNumber: '347-638-6520',
      emailId: 'rstillwell2@sbwire.com',
      role: 'user',
      activeStatus: true,
    },
    {
      id: '4',
      username: 'Tonie Kimbury',
      phoneNumber: '271-511-7975',
      emailId: 'tkimbury3@php.net',
      role: 'user',
      activeStatus: false,
    },
    {
      id: '5',
      username: 'Philippa Croft',
      phoneNumber: '963-430-0423',
      emailId: 'pcroft4@washington.edu',
      role: 'guest',
      activeStatus: false,
    },
    {
      id: '6',
      username: 'Bethany Nozzolinii',
      phoneNumber: '387-386-3956',
      emailId: 'bnozzolinii5@independent.co.uk',
      role: 'guest',
      activeStatus: true,
    },
    {
      id: '7',
      username: 'Jamima Sill',
      phoneNumber: '497-624-3994',
      emailId: 'jsill6@businessinsider.com',
      role: 'user',
      activeStatus: true,
    },
    {
      id: '8',
      username: 'Tobye Dannohl',
      phoneNumber: '655-504-9721',
      emailId: 'tdannohl7@alibaba.com',
      role: 'guest',
      activeStatus: false,
    },
    {
      id: '9',
      username: 'Tedie Vannini',
      phoneNumber: '210-429-2261',
      emailId: 'tvannini8@howstuffworks.com',
      role: 'guest',
      activeStatus: true,
    },
    {
      id: '10',
      username: 'Gareth Tichelaar',
      phoneNumber: '551-452-7346',
      emailId: 'gtichelaar9@hostgator.com',
      role: 'admin',
      activeStatus: false,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
