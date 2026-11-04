/**
 * Fetches real commit activity for a GitHub repository and transforms
 * it into daily contribution counts for Kokonut UI's ActivityTerrain component.
 */
export async function fetchGitHubRepoActivity(
  owner: string = "Rehansajid2130",
  repo: string = "Raye_clothing_brand",
  daysCount: number = 140
): Promise<{ data: number[]; endDate: string; totalCommits: number }> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}: using fallback data`);
      return getFallbackActivity(daysCount);
    }

    const commits = await res.json();
    const countsByDate: Record<string, number> = {};

    commits.forEach((c: any) => {
      const d = c.commit?.author?.date || c.commit?.committer?.date;
      if (d) {
        const dateStr = d.slice(0, 10);
        countsByDate[dateStr] = (countsByDate[dateStr] || 0) + 1;
      }
    });

    const today = new Date();
    const endDate = today.toISOString().slice(0, 10);
    const data: number[] = [];

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      data.push(countsByDate[dateStr] || 0);
    }

    const totalCommits = data.reduce((a, b) => a + b, 0);
    return { data, endDate, totalCommits };
  } catch (err) {
    console.error("Failed to fetch repository activity from GitHub:", err);
    return getFallbackActivity(daysCount);
  }
}

/** Fallback sample data in case GitHub API rate limits or network issues occur */
function getFallbackActivity(daysCount: number) {
  const today = new Date();
  const endDate = today.toISOString().slice(0, 10);
  const data: number[] = new Array(daysCount).fill(0);
  // Add recent activity
  if (data.length >= 3) {
    data[data.length - 3] = 4;
    data[data.length - 2] = 4;
    data[data.length - 1] = 1;
  }
  return { data, endDate, totalCommits: 9 };
}
