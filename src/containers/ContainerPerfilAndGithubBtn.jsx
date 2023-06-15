import React from 'react'
import PerfilPhoto from '../components/PerfilPhoto'
import GitHubBtn from '../components/GItHUbBtn'

const ContainerPerfilAndGithubBtn = () => {
  return (
    <div className='w-4/6  justify-between h-auto flex'>
      <div className='translate-y-[-60px]'>

      <PerfilPhoto />
      </div>
      <GitHubBtn />


    </div>
  )
}

export default ContainerPerfilAndGithubBtn