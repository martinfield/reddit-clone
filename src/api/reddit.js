const API_ROOT = 'https://wwww.reddit.com';
const subreddit = 'r/AskReddit';
const permalink = '/r/AskReddit/comments/xf7y8u/how_would_the_world_change_if_men_could_suddenly/iokzhmy/';

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

