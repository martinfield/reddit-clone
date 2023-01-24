/* describe('Home Page Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render posts with and without applied filters', () => {
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/best');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/hot');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/new');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/top');
        cy.get('[data-cy="post-item"]').should('be.visible');
    })
    
});

describe('Header component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render the header title and logo which can route back to homePage when clicked', () => {
        cy.get('h1').should('be.visible');
        cy.get('[data-cy="reddit-simple"]').should('be.visible');
        cy.get('[data-cy="reddit-icon"]').should('be.visible');
        cy.visit('localhost:3000/best')
        cy.get('[data-cy="reddit-simple"]').click();
        cy.url().should('eq', 'http://localhost:3000/')
    })
});

describe('Communities Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render the top communities upon clicking the expand menu button', () => {
        cy.get('[data-cy="expand-menu-button"]').should('be.visible');
        cy.get('[data-cy="expand-menu-button"]').click()
        cy.get('h3').should('have.text', 'Top Communities');
        cy.get('[data-testid="communities-list-item"]').should('be.visible')
    })
});

describe('Nav Bar Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render four Sort-By nagivational links', () => {
        cy.get('[data-cy="best-nav"]').should('have.text', 'Best');
        cy.get('[data-cy="hot-nav"]').should('have.text', 'Hot');
        cy.get('[data-cy="new-nav"]').should('have.text', 'New');
        cy.get('[data-cy="top-nav"]').should('have.text', 'Top');
    })
    it('should correctly route to the right component', () => {
        cy.get('[data-cy="best-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/best');
        cy.get('[data-cy="hot-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/hot');
        cy.get('[data-cy="new-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/new');
        cy.get('[data-cy="top-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/top');
    })
})

describe('SearchBar Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should have an input with the placeholder "Search Reddit..." ', () => {
        cy.get('input').should('have.attr', 'placeholder', 'Search Reddit...')
    })
    it('should render a list of posts containing the search term', () => {
        cy.get('input').type('League of Legends{enter}');
        cy.url().should('eq', 'http://localhost:3000/search/League%20of%20Legends')
        cy.get('[data-cy="post-item"]').contains('League of Legends')
    })
})

describe('Post Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render a title, subtitle, media (if applicable), no. of votes and comments', () => {
        cy.get('[data-cy="post-title"]').should('be.visible');
        cy.get('.MuiCardHeader-subheader').should('be.visible');
        cy.get('[data-testid="card-media"]').should('be.visible');
        cy.get('[data-cy="votes"]').should('be.visible');
        cy.get('[data-cy="comments-button"]').should('be.visible');

    })
})

describe('Subreddit Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000/r/AskReddit");
    });

    it('should render a subreddit icon, title and name and a list of subreddit posts', () => {
        cy.get('[data-cy="subreddit-icon"]').should('be.visible');
        cy.get('[data-cy="subreddit-title"]').should('be.visible');
        cy.get('[data-cy="subreddit-subtitle"]').should('be.visible');
        cy.get('[data-cy="subreddit-post-item"]').should('be.visible'); 
    })

})

describe('Comments Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000/r/AskReddit");
    });
    it('clicking comments on a post should route you to the individual post with its comment tree', () => {
        cy.contains('Comments').click();
        cy.get('[data-cy="post-item-comments"]').should('be.visible');
    })
})

describe("ScrollUpButton", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("should not be visible when the page is loaded", () => {
        cy.get('[data-cy="scroll-button"]').should("not.be.visible");
    });

    it("should be visible when the user scrolls down more than 300px", () => {
        cy.scrollTo(0, 500);
        cy.get('[data-cy="scroll-button"]').should("be.visible");
    });

    it("should not be visible when the user scrolls up less than 300px", () => {
        cy.scrollTo(0,500);
        cy.scrollTo(0, -500);
        cy.get('[data-cy="scroll-button"]').should("not.be.visible");
    });

    it("should scroll to the top of the page when clicked", () => {
        cy.scrollTo(0,500);
        cy.get('[data-cy="scroll-button"]').click();
        cy.window().its('scrollY').should('equal', 0)
    });
}); */