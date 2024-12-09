'use client';
import React, { useRef, useEffect } from 'react';

/**
 * HexagonCanvas is a React functional component that renders a canvas element
 * and draws a grid of hexagons on it. The hexagons are filled with red color
 * and have green borders. The component also handles click events on the canvas,
 * and alerts the user with the coordinates of the clicked hexagon.
 *
 * The component uses the following hooks and functions:
 * - `useRef<HTMLCanvasElement>(null)`: Creates a reference to the canvas element.
 * - `useEffect`: Sets up the canvas context, draws the hexagons, and adds an event listener for click events.
 * - `drawHexagon(x: number, y: number)`: Draws a single hexagon at the specified coordinates.
 * - `createHexagons()`: Creates a grid of hexagons and stores their coordinates.
 * - `handleClick(event: MouseEvent)`: Handles click events on the canvas and checks if a hexagon was clicked.
 *
 * The component cleans up the event listener when it unmounts.
 *
 * @returns A JSX element containing a canvas with a grid of hexagons.
 */
const HexagonCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const characters = [
    { char: '❄', x: 100, y: 100, dx: 0, dy: 2 },
    { char: '❅', x: 200, y: 200, dx: 0, dy: 2 },
    { char: '❆', x: 300, y: 300, dx: 0, dy: 2 },
    { char: '❆', x: 300, y: 300, dx: 0, dy: 2 },
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🐞', x: 500, y: 500, dx: 2, dy: 2 }, // Aggiungi il carattere della coccinella
    { char: '🦋', x: 600, y: 600, dx: 2, dy: 2 }, // Aggiungi il carattere della farfalla
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🐝', x: 400, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere dell'ape
    { char: '🦋', x: 600, y: 600, dx: 2, dy: 2 },
    { char: '🌸', x: 700, y: 100, dx: -2, dy: 2 }, // Aggiungi il carattere del fiore
    { char: '🌼', x: 100, y: 200, dx: 2, dy: -2 }, // Aggiungi il carattere del fiore
    { char: '🌻', x: 200, y: 300, dx: -2, dy: -2 }, // Aggiungi il carattere del fiore
    { char: '🌺', x: 300, y: 400, dx: 2, dy: 2 }, // Aggiungi il carattere del fiore
    { char: '🌷', x: 400, y: 500, dx: -2, dy: 2 }, // Aggiungi il carattere del fiore
    { char: '🎄', x: 500, y: 100, dx: 1, dy: 1 }, // Albero di Natale
    { char: '🎅', x: 600, y: 200, dx: -1, dy: 1 }, // Babbo Natale
    { char: '🎁', x: 700, y: 300, dx: 1, dy: -1 }, // Regalo
    { char: '⛄', x: 800, y: 400, dx: -1, dy: -1 }, // Pupazzo di neve
  
  ];
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const hexagonSize = 35;
    const hexagonHeight = Math.sqrt(3) * hexagonSize;
    const hexagonWidth = 2 * hexagonSize;
    const hexagons: { x: number; y: number; c: string }[] = [];

    // Function to draw a single hexagon
    const drawHexagon = (x: number, y: number, color: string) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        ctx.lineTo(
          x + hexagonSize * Math.cos((Math.PI / 3) * i),
          y + hexagonSize * Math.sin((Math.PI / 3) * i)
        );
      }
      ctx.closePath();
      ctx.fillStyle = color; // Set fill color to red
      ctx.fill();
      ctx.strokeStyle = 'grey'; // Set stroke color to green
      ctx.stroke();
    };

    // Function to create a grid of hexagons
    const createHexagons = () => {
      let y= canvas.height/2;
      let x=  hexagonWidth;
      let xt= canvas.width-x;
      let c= 'orange';
      // Draw the letter 'O' in the top right corner
      ctx.font = '50px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText('O', canvas.width/5,canvas.height/5,);
      ctx.fillText('M', canvas.width*2/3, canvas.height/5);
      ctx.fillText('A', canvas.width/5,canvas.height*4/5);
      ctx.fillText('R', canvas.width*2/3, canvas.height*4/5);

    //  for (let y = 0; y < canvas.height; y += hexagonHeight * 0.75) {
     //   for (let x = 0; x < canvas.width; x += hexagonWidth * 0.75) {
          for (let z = 1; z <= 7; z++ ){ 
            x= z*hexagonWidth*0.75;
            xt= 15*hexagonWidth*0.75-x;
            y= (canvas.height-hexagonHeight*z)/2; 
           // y += (z%2 === 1) ? 0 : hexagonHeight/2;
            for (let i = 1; i <= z; i++) {
                  drawHexagon(x, y, c);
                  hexagons.push({ x, y , c }); 
                  //
                  if (i != z){
                    
                    drawHexagon(xt, y+hexagonHeight/2, c);
                    hexagons.push({ x:xt, y:y+hexagonHeight/2 , c });
                  }
                  //
                  y += hexagonHeight;
                  
              }     
          }
           /* if (z%2 === 1){
                  y= canvas.height/2;  
                  drawHexagon(x, y, c);
                  hexagons.push({ x, y , c });
            }else{
                 y= canvas.height/2-hexagonHeight*0.5;
                 drawHexagon(x, y, c);
                 hexagons.push({ x, y , c });
                 y= canvas.height/2+hexagonHeight*0.5;
                 drawHexagon(x, y, c);
                  hexagons.push({ x, y , c });

            } */    

            
           
        }
    //  }
   

    // Event handler for canvas click
    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hexagons.forEach((hex) => {
        const dx = x - hex.x;
        const dy = y - hex.y;
        if (Math.sqrt(dx * dx + dy * dy) < hexagonSize-5) {
        //  alert(`Hexagon clicked at (${hex.x}, ${hex.y})`);
        hex.c = (hex.c === 'orange' ? 'brown' : (hex.c === 'yellow' ? 'orange' : 'yellow'));
        drawHexagon(hex.x, hex.y, hex.c );
            
        }
      });
    };
    const drawCharacter = (char: string, x: number, y: number) => {
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(char, x, y);
    };

    const randomchr = () => {
     
      characters.forEach((char) => {
        //char.x = char.dx;
        char.x = canvas.width*Math.random();
        char.y = canvas.height*Math.random();

        
        drawCharacter(char.char, char.x, char.y);
      });
      
    };

    // Add event listener for click events
    canvas.addEventListener('click', handleClick);
    
    createHexagons();
   // animate();
   randomchr();
    // Cleanup event listener on component unmount
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default HexagonCanvas;