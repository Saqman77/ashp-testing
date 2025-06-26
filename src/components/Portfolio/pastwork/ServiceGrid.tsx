import React, { useEffect, useState } from "react";

interface Project {
  name: string;
  link: string | null;
}


interface Client {
  name: string;
  projects: Project[];
}

interface Service {
  service: string;
  id: string;
  genres: {
    Fiction: Client[];
    Nonfiction: Client[];
  };
}

interface ServiceGridProps {
  isVisible: boolean;
  service: Service;
  close: () => void;
  start: () => void;
  end: () => void;
  next: string|null;
  last: string|null;
  currentIndex: number;
  length: number;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ isVisible, service, start, end, close, next, last, currentIndex: mainIndex, length }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fiction' | 'Nonfiction'>('All');
  const [activeScreen, setActiveScreen] = useState<'service' | 'client'>('service');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [currentIndex, setCurrentIndex] = useState(mainIndex);
  const handleFilterClick = (filter: 'All' | 'Fiction' | 'Nonfiction') => {
    setActiveFilter(filter);
  };

  const handleBackClick = () => {
    setActiveScreen('service');
  }

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
    setActiveScreen('client');
  }

  const closeService = () => {
    setActiveScreen('service');
    setSelectedClient(null);
    close();
  }

      useEffect(() => {
          setCurrentIndex(mainIndex);
          setActiveFilter('All')
        }, [mainIndex]);

  

  if (!isVisible) return null;

  const filteredGenres =
    activeFilter === 'All'
      ? [...service.genres.Fiction, ...service.genres.Nonfiction]
      : activeFilter === 'Fiction'
      ? service.genres.Fiction
      : service.genres.Nonfiction;

  return (
    <div className="past-wrapper">
      <div className="past-heading">
       
         {
         
          activeScreen !== 'service' ?
          <div className="past-heading-wrapper"
          onClick={handleBackClick}
          >
          <button

            className="past-toggle"
            // onClick={handleBackClick}
          >
            
            <span
              className="back-arrow"
            >
         
            </span>
              {/* {<p className="back-heading">{service.service}</p>} */}
            </button>
         </div>
          :('')
         
          }
          <h3 className="s-heading" >{activeScreen == 'service' ? (service.service == 'Full Editing Services' ? <>{service.service} <span>aka. Book Surgery</span></> : service.service) : selectedClient?.name}</h3>
       
        <div className="past-close">
          <button
            onClick={() => {closeService()}}
            // style={{
            //   position: "relative",
            //   width: "40px",
            //   height: "40px",
            //   background: "transparent",
            //   border: "none",
            //   cursor: "pointer",
            //   padding:"1.5rem"
            // }}
          >
            <span
              className="close first"
            />
            <span
              className="close second"

            />
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      {activeScreen == 'service' && service.id != 'other-services' ?(
        <div className="filter-buttons">
          <button
            className={activeFilter === 'All' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button
            className={activeFilter === 'Fiction' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('Fiction')}
          >
            Fiction
          </button>
          <button
            className={activeFilter === 'Nonfiction' ? 'filter-button active' : 'filter-button'}
            onClick={() => handleFilterClick('Nonfiction')}
          >
            Nonfiction
          </button>
        </div>
      ) : (<div className="filter-buttons">
        {}
        </div>
      )}
      

      {/* Display filtered genres and projects */}
      {activeScreen == 'service' && (
        <div className="past-work">
          {filteredGenres.map((client) => (
            <button 
              key={client.name} 
              className="past-card"
              onClick={() => {handleClientClick(client)}}
            >
              <h4>{client.name}</h4>
              {/* <div>Projects: {client.projects.length}</div> */}
              {/* <ServProject genre={client} /> */}
            </button>
          ))}
        </div>
      )}

      {activeScreen == 'client' && selectedClient && (
        <div className="past-work">
          {selectedClient.projects.map((project) => (
            project.link != null ? (
              <a className="past-card" href={project.link} target="_blank" rel="noopener noreferrer" key={project.name}>
                <div>{project.name}</div>
                <a className="yes linker" >
                  <span className="yesarrow"></span>
                </a>
              </a>
            ) : (
              <div className="past-card" key={project.name}>
                <div>{project.name}</div>
               { service.id != 'other-services' ? <i className="unreleased linker">Unreleased</i> : <></>}
              </div>
            )
          ))}
        </div>
      )}
                 {activeScreen !== 'client' && <div className="page-wrapper">
                    <button
                      className={`paging ${currentIndex === 0 ? "disabled" : ""}`}
                      onClick={end}
                    >
                      {last}
                    </button>
                    <button
                      className={`paging ${currentIndex === length - 1 ? "disabled" : ""}`}
                      onClick={start}
                    >
                      {next}
                    </button>
                  </div>}
    </div>
    
  );
};

export default ServiceGrid;
