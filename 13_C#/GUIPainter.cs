// C# .NET
//
// DocString
//
// author: Simon Renblad
// version: 0.1.0
// license: MIT

using System;
using System.Windows.Forms;
using System.Drawing;

namespace First
{
    public class MyForm : Form
    {
        private int x;

        public MyForm()
        {
            InitComponents();
        }

        private void InitComponents()
        {
            this.x = 0;
            this.Text = "First application";
            this.Paint += new PaintEventHandler(OnPaint);

            //move when clicked
            this.KeyPreview = true;
            this.KeyPress += new KeyPressEventHandler(OnKeyPress);

            this.ClientSize = new Size(800, 450);
            // add stuff to frame here
            
            CenterToScreen();
        }

        void OnKeyPress(object sender, KeyPressEventArgs e) {

            Console.WriteLine("Key Pressed"); 
            x += 10;
            Invalidate();

        }

        void OnPaint(object sender, PaintEventArgs e) {

            Graphics g = e.Graphics;

            //add things to paint here
            g.FillRectangle(Brushes.Green, this.x, 0, this.x + 100, 100); //paints green square

            //dispose of graphics
            g.Dispose();

        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new MyForm());
        }
    }
}

