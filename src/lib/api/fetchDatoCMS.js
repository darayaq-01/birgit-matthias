// src/api/fetchDatoCMS.js
export async function fetchDatoCMS(query) {
    const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
        },
        body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
  
    return await response.json();
  }
