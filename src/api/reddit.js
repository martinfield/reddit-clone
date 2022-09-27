export const API_ROOT = 'https://wwww.reddit.com';

export const getBestPage = async() => {
    const response = await fetch(`${API_ROOT}/best.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getHotPage = async() => {
    const response = await fetch(`${API_ROOT}/hot.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getNewPage = async() => {
    const response = await fetch(`${API_ROOT}/new.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getTopPage = async() => {
    const response = await fetch(`${API_ROOT}/top.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getTopPageTimeSorted = async(timeFrame) => {
    const response = await fetch(`${API_ROOT}/top.json?t=${timeFrame}}`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getSubredditPosts = async(subreddit) => {
    const response = await fetch(`${API_ROOT}/${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getSubredditPostsSorted = async(subreddit, sort) => {
    const response = await fetch(`${API_ROOT}/${subreddit}/${sort}.json`);
    const json = await response.json();

    return json.data.children.map(post => post.data);
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };

export const getProfileInfo = async(name) => {
    const response = await fetch(`${API_ROOT}/user/${name}/about.json`);
    const json = await response.json();

    return json.data.children.map(user => user.data);
}

