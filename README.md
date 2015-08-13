# GBIT-16 (GameBit 16)

## NOTE:

Keep in mind that this is in development and doesn't really work fully at this moment. There is still a good amount of work to be done.

### TODOS:
1. Write instruction handler.
2. Write binary multiplication operation.
3. Write binary Division operation.
4. Write a screen interface that supports both character mode and graphic mode.
5. Write an Assembler so that we can code in assembly instead of binary.

## REGISTERS

| Binary | Name | Description                            |
|:------:|:----:|:--------------------------------------:|
| 0000   | AX   | General Register A                     |
| 0001   | AL   | Low Byte of A                          |
| 0010   | AH   | High Byte of A                         |
| 0011   | BX   | General Register B                     |
| 0100   | BL   | Low Byte of B                          |
| 0101   | BH   | High Byte of B                         |
| 0110   | CX   | General Register C                     |
| 0111   | CL   | Low Byte of C                          |
| 1000   | CH   | High Byte of C                         |
| 1001   | DX   | General Register D                     |
| 1010   | DL   | Low Byte of D                          |
| 1011   | DH   | High Byte of D                         |
| 1100   | PC   | Program Counter                        |
| 1101   | IP   | Instruction Pointer (next instruction) |
| 1110   | SP   | Stack Pointer                          |
| 1111   | FG   | Flags (look below)                     |

## FLAGS

| Flag | Description   |
|:----:|:-------------:|
| CF   | Carry Flag    |
| PF   | Parity Flag   |
| NF   | Negative Flag |
| ZF   | Zero Flag     |
| 00   | N/A           |
| 00   | N/A           |
| 00   | N/A           |
| 00   | N/A           |

## INSTRUCTION SET

| Inst | nam | Process        | Description               |
|:----:|:---:|:--------------:|:-------------------------:|
| 0000 | BAN | AX &  BX -> CX | Bitwise AND          (&)  |
| 0001 | BOR | AX \| BX -> CX | Bitwise OR           (\|) |
| 0010 | BNO | AX !  BX -> CX | Bitwise NOT          (!)  |
| 0011 | BXO | AX ^  BX -> CX | Bitwise Exclusive OR (^)  |
| 0100 | BLS | AX << AX -> AX | Bitwise Left Shift   (<<) |
| 0101 | BRS | AX >> AX -> AX | Bitwise Right Shift  (>>) |
| 0110 | MOV | AX <- BX       | Move reg-A into reg-B     |
| 0111 | MOV | AH/L <- 8bit   | Move value into register  |
| 1000 | ADD | AX +  BX -> CX | Add Two Registers         |
| 1001 | SUB | AX -  BX -> CX | Subtract Two Registers    |
| 1010 | MUL | AX *  BX -> CX | Multiply Two Registers    |
| 1011 | DIV | AX /  BX -> CX | Divide Two Registers      |
| 1100 | RRB | AX <- :DX      | RAM Read Byte             |
| 1101 | RSB | AX -> :DX      | RAM Save Byte             |
| 1110 | JMP | :DX            | Non-conditional Branch    |
| 1111 | JZT | :DX            | Branch if ZF is 0         |

## INSTRUCTION FORMAT

### I1R (Instruction 1 Register)

| inst | AX   | value    |
|:----:|:----:|:--------:|
| 4bit | 4bit | 8bit     |

### I2R (Instruction 2 Registers)

| inst | AX   | N/A  | BX   |
|:----:|:----:|:----:|:----:|
| 4bit | 4bit | 0000 | 4bit |

### I3R (Instruction 3 Registers)

| inst | AX   | BX   | CX   |
|:----:|:----:|:----:|:----:|
| 4bit | 4bit | 4bit | 4bit |
