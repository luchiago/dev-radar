import React from 'react';
import './styles.css';
import DeleteIcon from '@material-ui/icons/Delete';

function DevItem({ dev, onClick }) {

  async function handleClick(dev){
    await onClick(dev);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <div className="links">
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
        <button className="user-delete" onClick={handleClick}>
          <DeleteIcon fontSize="small"/>
        </button>
      </div>
    </li>
  );
}

export default DevItem;
