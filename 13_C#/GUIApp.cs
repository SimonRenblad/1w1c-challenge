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
        private FlowLayoutPanel panel;

        public MyForm()
        {
            InitComponents();
        }

        private void InitComponents()
        {
            Text = "First application";
            ClientSize = new Size(800, 450);
            // add stuff to frame here
            panel = new FlowLayoutPanel();

            // add button
            var button = new Button();
            button.Text = "First Button";
            button.AutoSize = true;

            //add button to panel
            panel.Controls.Add(button);
            
            //add panel to frame
            Controls.Add(panel);

            CenterToScreen();
        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new MyForm());
        }
    }
}
