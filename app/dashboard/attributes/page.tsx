import { Languages, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Languages[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      attribute: 'FirstName',
      activeStatus: true,
    },
    {
      id: '2',
      attribute: 'Last Name',
      activeStatus: true,
    },
    {
      id: '3',
      attribute: 'Address',
      activeStatus: true,
    },
    {
      id: '4',
      attribute: 'Phone Number',
      activeStatus: true,
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
