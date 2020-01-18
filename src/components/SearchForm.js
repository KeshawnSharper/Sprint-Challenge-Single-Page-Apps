import React from "react"
import styled from 'styled-components'


export default function RequestStory(props){
    const Heading = styled.h2`
    text-align:center;
    margin-bottom:3rem;
    `
    const Ul = styled.ul`
     
      margin-bottom:10rem;
    `
    const Li = styled.li`
    list-style:none;
    
    `
    const Accept = styled.button`
padding:1.3rem;
margin-left:25rem;
    `
    const Decline = styled.button`
padding:1.3rem;

    `
    const Img = styled.img`
margin-left:-5rem;

    `

    
    return (
        <div>
              
            <Heading>Admin Dashboard</Heading>
            <div className="request-header">
        <Img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></Img>
        <Ul>
            <Li>Name :{}</Li>
            <Li>Location :{}</Li>
            <Li>Time :{}</Li>
            <Li>Lorem Ipsem:{}</Li>
            
        </Ul>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. In massa tempor nec feugiat. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Orci porta non pulvinar neque laoreet suspendisse. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Molestie at elementum eu facilisis sed odio. Diam vel quam elementum pulvinar etiam non quam. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Suspendisse in est ante in. Magna sit amet purus gravida quis. Egestas pretium aenean pharetra magna ac. Justo eget magna fermentum iaculis eu.

Neque gravida in fermentum et sollicitudin ac. Accumsan lacus vel facilisis volutpat est velit. Maecenas pharetra convallis posuere morbi. Ut etiam sit amet nisl purus in mollis nunc sed. Mi bibendum neque egestas congue quisque egestas diam in. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Tincidunt vitae semper quis lectus nulla at volutpat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Tempor orci eu lobortis elementum nibh tellus molestie. Ipsum faucibus vitae aliquet nec ullamcorper sit. Nunc mi ipsum faucibus vitae. Vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet nisl purus in mollis nunc sed. Odio ut sem nulla pharetra diam sit amet. Massa massa ultricies mi quis hendrerit dolor magna eget. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.





            </p>
            <Accept>Approved</Accept>
            <Decline>Decline</Decline>
        </div>
    )
}