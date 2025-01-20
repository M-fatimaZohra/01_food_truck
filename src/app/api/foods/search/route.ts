import { NextResponse } from 'next/server';
import data from '@/data/food.json';

import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  // Filter the data based on the search query
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  return NextResponse.json(filteredData);
}
