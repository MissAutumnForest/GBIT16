module.exports = {
  inst: {
    'BAN': {
      'bin': '0000',
      'type': 'i3r'
    },
    'BOR': {
      'bin': '0001',
      'type': 'i3r'
    },
    'BNO': {
      'bin': '0010',
      'type': 'i2r'
    },
    'BXO': {
      'bin': '0011',
      'type': 'i3r'
    },
    'BLS': {
      'bin': '0100',
      'type': 'i2r'
    },
    'BRS': {
      'bin': '0101',
      'type': 'i2r'
    },

    'MOV1': {
      'bin': '0110',
      'type': 'i2r'
    },
    'MOV2': {
      'bin': '0111',
      'type': 'i1r'
    },
    'ADD': {
      'bin': '1000',
      'type': 'i3r'
    },
    'SUB': {
      'bin': '1001',
      'type': 'i3r'
    },
    'MUL': {
      'bin': '1010',
      'type': 'i3r'
    },
    'DIV': {
      'bin': '1011',
      'type': 'i3r'
    },

    'RRB': {
      'bin': '1100',
      'type': 'i2r'
    },
    'RSB': {
      'bin': '1101',
      'type': 'i2r'
    },

    'JMP': {
      'bin': '1110',
      'type': 'ir1' // really it only uses inst and reg.
    },
    'JZT': {
      'bin': '1111',
      'type': 'ir1' // Same here
    }
  },

  reg: {
    'AX': '0000',
    'AL': '0001',
    'AH': '0010',

    'BX': '0011',
    'BL': '0100',
    'BH': '0101',

    'CX': '0110',
    'CL': '0111',
    'CH': '1000',

    'DX': '1001',
    'DL': '1010',
    'DH': '1011',

    'PC': '1100',
    'IP': '1101',
    'SP': '1110',
    'FG': '1111',
  }
}
