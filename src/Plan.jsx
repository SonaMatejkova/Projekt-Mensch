import React from 'react';
import { Figure } from './Figure.jsx';
import { isPlayerInGame } from './state.js';

export const Plan = (props) => {
  return (
    <svg
      className="plan"
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <defs>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k3="1"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer in="blur" result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
        <filter
          width="1.5"
          height="1.5"
          x="-0.25"
          y="-0.25"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="result8"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result8"
            operator="xor"
            result="result18"
          ></feComposite>
          <feComposite
            in="result8"
            in2="result18"
            k1="1"
            k2="0.5"
            k3="0"
            k4="0"
            operator="arithmetic"
            result="result16"
          ></feComposite>
          <feComposite
            in="result16"
            in2="result8"
            operator="atop"
            result="result6"
          ></feComposite>
          <feOffset in="result6" result="result17"></feOffset>
          <feDisplacementMap
            in="result17"
            in2="result16"
            result="result4"
            scale="100"
            xChannelSelector="A"
            yChannelSelector="A"
          ></feDisplacementMap>
          <feComposite
            in="result17"
            in2="result4"
            k1="0"
            k2="0"
            k3="1"
            k4="0"
            operator="arithmetic"
            result="result2"
          ></feComposite>
          <feComposite
            in="result2"
            in2="result17"
            operator="out"
            result="fbSourceGraphic"
          ></feComposite>
          <feComposite
            in="fbSourceGraphic"
            in2="fbSourceGraphic"
            operator="over"
            result="result14"
          ></feComposite>
          <feComposite
            in="result14"
            in2="SourceGraphic"
            operator="in"
            result="result15"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feComponentTransfer result="fbSourceGraphic">
            <feFuncR
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncR>
            <feFuncG
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncG>
            <feFuncB
              amplitude="2.874"
              exponent="2.156"
              offset="-0.659"
              type="gamma"
            ></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feConvolveMatrix
            divisor="1"
            in="fbSourceGraphic"
            kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0"
            order="3 3"
            result="result1"
            targetX="1"
            targetY="1"
          ></feConvolveMatrix>
          <feBlend
            in2="fbSourceGraphic"
            mode="normal"
            result="fbSourceGraphic"
          ></feBlend>
          <feColorMatrix
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
          ></feColorMatrix>
          <feGaussianBlur
            in="fbSourceGraphic"
            result="blur"
            stdDeviation="0.21 0.21"
          ></feGaussianBlur>
        </filter>
      </defs>
      <Figure
        player={props.fields[0]}
        position=".3367 0 0 .3341 41.892 14.393"
      />
      <Figure
        player={props.fields[1]}
        position=".35347 0 0 .33164 66.701 11.122"
      />
      <Figure
        player={props.fields[2]}
        position=".3367 0 0 .3341 95.257 10.797"
      />
      <Figure
        player={props.fields[3]}
        position=".3367 0 0 .3341 120.19 9.237"
      />
      <Figure
        player={props.fields[4]}
        position=".3367 0 0 .3341 151.17 11.473"
      />
      {/*domeček*/}
      <Figure
        player={isPlayerInGame(props.fields, 1) ? 0 : 1}
        position=".3367 0 0 .3341 4.582 -11.145"
      />
      <Figure
        player={isPlayerInGame(props.fields, 2) ? 0 : 2}
        position=".33695 0 0 .32276 3.75 34.285"
      />
    </svg>
  );
};
