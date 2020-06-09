# Training Markup Language

> *TML* stands for *Training Markup Language*. *TML* is a markup language aiming at providing a simple and clean way to describe a training/workout with the exercises and the performances.

## Example
```tml
I really enjoyed my workout because of my TML logs!

# Squat
150kg x 5 @ 7
160kg x 5 @ 8
160kg x 5 @ 8
160kg x 5 @ 9
my squat session felt really great! I hit my RPEs seamlessly!

# Deadlift
150kg x 5 @ 7
160kg x 5 @ 8
160kg x 5 @ 8
160kg x 5 @ 9
my deadlift session felt really great! I hit my RPEs seamlessly!

# Push ups
25 x 4
it felt really hard, trust me!
```

## Installation
```shell script
npm i --save tml-parser
```

## Parsing in JS
```ts
import * as tml from "tml-parser";

const input = `I really enjoyed my workout because of my TML logs!
               
               # Squat
               150kg x 5 @ 7
               160kg x 5 @ 8
               160kg x 5 @ 8
               160kg x 5 @ 9
               my squat session felt really great! I hit my RPEs seamlessly!
               
               # Deadlift
               150kg x 5 @ 7
               160kg x 5 @ 8
               160kg x 5 @ 8
               160kg x 5 @ 9
               my deadlift session felt really great! I hit my RPEs seamlessly!
               
               # Push ups
               25 x 4
               it felt really hard, trust me!
`;

const workout = tml.parse(input);

console.log(workout);
}
```

## [Language Specification](https://github.com/yanishoss/tml/blob/master/SPECIFICATION.md "TML Specification")

## Acknowledgments
### [weightroom.uk](https://weightroom.uk/ "Weightroom")
I have gotten this idea from [weightroom.uk](https://weightroom.uk/ "Weightroom") as I was using their app to track my Powerlifting progression.  