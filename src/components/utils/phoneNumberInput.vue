<template>
    <input class="input-line" type="tel" ref="input" :value="value" @input="updateValue($event.target.value)" :placeholder="placeholder">
</template>
<script>
export default {
    name: 'phoneNumberInput',
    props: ['value'],
    data: function () {
        return {
            rawNumber: '',
            countryCode: '+33',
            format: '01 23 45 67 89', // make into a vector
            formatVec: [
                '0',
                '1',
                ' ',
                '2',
                '3',
                ' ',
                '4',
                '5',
                ' ',
                '6',
                '7',
                ' ',
                '8',
                '9'
            ],
            placeholder: '06 11 22 33 44'
        };
    },
    computed: {
        numDigits() {
            return this.format.replace(/ /g, '').length;
        }
    },
    methods: {
        updateValue(value) {
            let formattedNumber = value;

            // first check if last character is numeric and otherwise do not allow it
            if (isNaN(value.charAt(value.length - 1))) {
                formattedNumber = value.slice(0, value.length - 1);
                this.$refs.input.value = formattedNumber;
                return;
            }

            //check that you haven't exceeeded ten digits
            if (value.replace(/ /g, '').length > this.numDigits) {
                formattedNumber = value.slice(0, value.length - 1);
                this.$refs.input.value = formattedNumber;
                return;
            }

            // Otherwise proceed
            // update raw number by removing any spaces and clear formatted Number
            this.rawNumber = value.replace(/ /g, '');
            formattedNumber = '';

            // now selecte partial format of number
            let last = this.format.indexOf(this.rawNumber.length - 1);
            let formatPartial = this.format.substr(0, last + 1);

            // and apply raw number to it
            for (let i = 0; i < formatPartial.length; i++) {
                if (formatPartial.charAt(i) !== ' ') {
                    formattedNumber += this.rawNumber.charAt(
                        parseInt(formatPartial.charAt(i))
                    );
                } else {
                    formattedNumber += ' ';
                }
            }

            // now update input field and emit event
            this.$refs.input.value = formattedNumber;
            this.$emit('input', formattedNumber);
        }
    }
}

</script>
<style>

</style>
