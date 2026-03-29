import { portfolioLinks } from "@/constants/globalLinks";


interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
}





function extractRepoInfo(url: string): { owner: string; repo: string } {
  const parts = url.split('/');
  const owner = parts[parts.length - 2];
  const repo = parts[parts.length - 1];
  return { owner, repo };
  
}

async function fetchRepoData(url: string): Promise<GitHubRepo> {
  const { owner, repo } = extractRepoInfo(url);
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return (await response.json()) as GitHubRepo;
}

export default async function Projects() {
  const reposData = await Promise.all(
    portfolioLinks.map(async (url) => {
      try {
        return await fetchRepoData(url);
      } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
      }
    })
  );





  const validRepos = reposData.filter((repo): repo is GitHubRepo => repo !== null);

  return (
    <main>

        <h1>GitHub Projects List</h1>
        
        <div className="card-container">
            {validRepos.map((repo) => (

            <div key={repo.id} className="sticky-note">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <div>
                     <strong>{repo.name}</strong>
                
                    <p>{repo.description || "No description provided."}</p>
                    <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
                    
                  </div>
                </a>
            </div>
            ))}
        </div>
    </main>

  );
}