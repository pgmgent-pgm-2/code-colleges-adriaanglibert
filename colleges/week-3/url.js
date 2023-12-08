const link = 'https://www.instagram.com/odey/reels?sort=most_liked&limit=10';
const parsedLink = new URL(link);
console.log(parsedLink.searchParams.get('limit'));
console.log(parsedLink.searchParams.has('sort'));

parsedLink.searchParams.append('rating', 'all');
parsedLink.searchParams.set('sort', 'desc');
console.log(parsedLink.searchParams);