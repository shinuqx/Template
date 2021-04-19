import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

 const Example: React.FC<any> = () =>{
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.github.com/users/shinuqx/repos').then(res =>
       res.json()
     )
   )

   if (isLoading) return (<div>Loading...</div>);
   if (error) return (<div>'An error has occurred: error.message' </div>)

   return(<div>
	 {data.map((item: Array<string>)=> <RepoCart data={item} />)
	  }
	 </div>)
 }
const RepoCart: React.FC<any>=({data})=>{

	   return (
		 <div key={data.id}>
		   <h1>Name: {data.name}</h1>
		   <p>Created: {data.created_at}</p>
		   <p>Description: {data.description}</p>
		   <strong>👀 {data.subscribers_count}</strong>{' '}
		   <strong>✨ {data.stargazers_count}</strong>{' '}
		   <strong>🍴 {data.forks_count}</strong>
		 </div>
	   );
	 }

const RepoQuery: React.FC<any> = (props) => {
   const queryClient = new QueryClient();
   return (
	   <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
 };

export default RepoQuery;

