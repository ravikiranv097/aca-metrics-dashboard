import React from 'react';
import Layout from './components/Layout';
import DashboardTile from './components/DashboardTile';
import './App.css';

const App = () => {
    const microservices = [
        { title: 'Project Read', url: 'https://tinyurl.com/mtcvkm5t' },
        { title: 'Project Write', url: 'https://tinyurl.com/ycfpdksy' },
        { title: 'Category Write/Read', url: 'https://tinyurl.com/yvusz3pw' },
        { title: 'SignUp & Login', url: 'https://tinyurl.com/bddtybcs' },
        { title: 'POC Read', url: 'https://tinyurl.com/2nysadnd' },
        { title: 'POC Write', url: 'https://tinyurl.com/2kc3nut2' },
        { title: 'Resource Read', url: 'https://tinyurl.com/yw3awad8' },
        { title: 'Resource Write', url: 'https://tinyurl.com/yksn8vsk' },
        { title: 'POC Category Read', url: 'https://tinyurl.com/3sdwys8y' },
        { title: 'Gateway Shim', url: 'https://tinyurl.com/4mh74ny5' },
        { title: 'Admin', url: 'https://tinyurl.com/tw76fzsp' },
        { title: 'API Dashboard', url: 'https://tinyurl.com/4n536mvn' },
    ];

    const microFrontends = [
        { title: 'Header', url: 'https://tinyurl.com/26sjwa9b' },
        { title: 'Footer', url: 'https://tinyurl.com/3z8jwmn9' },
        { title: 'Utility', url: 'https://tinyurl.com/y4354d2u' },
        { title: 'API Hub', url: 'https://tinyurl.com/y5ay8szf' },
        { title: 'POC', url: 'https://tinyurl.com/yh24845p' },
        { title: 'Resources', url: 'https://tinyurl.com/yupctx3e' },
        { title: 'Publisher', url: 'https://tinyurl.com/y2wk3san' },
        { title: 'TaaS', url: 'https://tinyurl.com/bddb3x86' },
        { title: 'Admin', url: 'https://tinyurl.com/murha4rp' },
        { title: 'Root', url: 'https://tinyurl.com/2trj83mk' },
    ];

    return (
        <Layout>
            <div className="dashboard-section">
                <h2>MICROSERVICES</h2>
                <div className="dashboard-container">
                    {microservices.map((dashboard, index) => (
                        <DashboardTile
                            key={index}
                            title={dashboard.title}
                            url={dashboard.url}
                        />
                    ))}
                </div>
            </div>
            <div className="dashboard-section">
                <h2>MICROFRONTENDS</h2>
                <div className="dashboard-container">
                    {microFrontends.map((dashboard, index) => (
                        <DashboardTile
                            key={index}
                            title={dashboard.title}
                            url={dashboard.url}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default App;
