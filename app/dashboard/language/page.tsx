import { Languages, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Languages[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      languageName: 'Telugu',
      activeStatus: false,
      createdBy: 'Vikram',
      createdAt: '8/29/2023',
    },
    {
      id: '2',
      languageName: 'Tamil',
      activeStatus: false,
      createdBy: 'Vikram',
      createdAt: '11/15/2023',
    },
    {
      id: '3',
      languageName: 'Kannada',
      activeStatus: true,
      createdBy: 'Vikram',
      createdAt: '7/8/2023',
    },
    {
      id: '4',
      languageName: 'Malayalam',
      activeStatus: true,
      createdBy: 'Ravi',
      createdAt: '11/3/2023',
    },
  ];
}

export default async function LanguagePage() {
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
